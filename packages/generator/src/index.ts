#!/usr/bin/env node

import { program } from "commander";
import fs from "fs-extra";
import path from "path";
import ejs from "ejs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import * as changeCase from "change-case";

// Define __dirname manually for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.resolve(__dirname, "../templates");

function getOutputFolder(type: string, kebabCase: string, folder: string): string {
    if(type === TemplateType.MODEL) {
        return path.resolve(process.cwd(), `src/models/${kebabCase}/${folder}`);
    }

    if(type === TemplateType.SERVICE) {
        return path.resolve(process.cwd(), `src/modules/${kebabCase}/${folder}`);
    }

    if(type === TemplateType.QUERY) {
        return path.resolve(process.cwd(), `src/modules/${kebabCase}/${folder}`);
    }

    if(type === TemplateType.MUTATION) {
        return path.resolve(process.cwd(), `src/modules/${kebabCase}/${folder}`);
    }

    throw new Error(`Unknown type: ${type}`);
}

interface FileTemplate {
    filename: string;
    outputFolder: string;
    templatePath: string;
}

enum TemplateType {
    MODEL = "model",
    SERVICE = "service",
    QUERY = "query",
    MUTATION = "mutation",
}

const fileTemplates: Record<TemplateType, FileTemplate[]> = {
    model: [
        { filename: "Index.model.ts.ejs", outputFolder: "index", templatePath: "models/index" },
        { filename: "IndexDto.model.ts.ejs", outputFolder: "index", templatePath: "models/index" },
        { filename: "IndexFiltersDto.model.ts.ejs", outputFolder: "index", templatePath: "models/index" },
        { filename: "IndexFilters.model.ts.ejs", outputFolder: "index", templatePath: "models/index" },
        { filename: "Detail.model.ts.ejs", outputFolder: "detail", templatePath: "models/detail" },
        { filename: "DetailDto.model.ts.ejs", outputFolder: "detail", templatePath: "models/detail" },
        { filename: "UpdateDto.model.ts.ejs", outputFolder: "update", templatePath: "models/update" },
        { filename: "UpdateForm.model.ts.ejs", outputFolder: "update" , templatePath: "models/update" },
        { filename: "CreateForm.model.ts.ejs", outputFolder: "create" , templatePath: "models/create" },
        { filename: "CreateDto.model.ts.ejs", outputFolder: "create" , templatePath: "models/create" },
        { filename: "Uuid.model.ts.ejs", outputFolder: "" , templatePath: "models" },
        { filename: ".transformer.ts.ejs", outputFolder: "", templatePath: "models" },
    ],
    service: [{
        filename: ".service.ts.ejs", outputFolder: "api/services", templatePath: "services"
    }],
    query: [
        { filename: "Index.query.ts.ejs", outputFolder: "api/queries", templatePath: "queries" },
        { filename: "IndexInfinite.query.ts.ejs", outputFolder: "api/queries", templatePath: "queries" },
        { filename: "Detail.query.ts.ejs", outputFolder: "api/queries", templatePath: "queries" },
    ],
    mutation: [
        { filename: "Create.mutation.ts.ejs", outputFolder: "api/mutations" , templatePath: "mutations" },
        { filename: "Update.mutation.ts.ejs", outputFolder: "api/mutations" , templatePath: "mutations" },
        { filename: "Delete.mutation.ts.ejs", outputFolder: "api/mutations", templatePath: "mutations" },
    ]
};


async function generateFiles(type: TemplateType, moduleName: string): Promise<void>  {
    const pascalCase = changeCase.pascalCase(moduleName);
    const camelCase = changeCase.camelCase(moduleName);
    const kebabCase = changeCase.kebabCase(moduleName);
    const snakeCase = changeCase.snakeCase(moduleName);

    const replacements = { pascalCase, camelCase, kebabCase, snakeCase };

    for (const template of fileTemplates[type] || []) {
        const templatePath = path.join(templatesDir,template.templatePath, template.filename);

        const outputFolder = getOutputFolder(type, kebabCase, template.outputFolder);
        const outputPath = path.join(outputFolder, `${camelCase}${template.filename.replace(".ejs", "")}`);

        try {
            const templateContent = fs.readFileSync(templatePath, "utf8");
            const outputContent = ejs.render(templateContent, replacements);

            fs.ensureDirSync(outputFolder);
            fs.writeFileSync(outputPath, outputContent);
            console.log(chalk.green(`✅ Created: ${outputPath}`));
        } catch (err) {
            console.error(chalk.red(`❌ Error generating ${outputPath}:`, err));
        }
    }
};

program
    .command("generate <type> <moduleName>")
    .description("Generate models, services, queries, or mutations")
    .action(generateFiles);

program
    .command("generate-all <moduleName>")
    .description("Generate all files for a module")
    .action(async (moduleName) => {
        const types: TemplateType[] = Object.values(TemplateType)
        for (const type of types) {
            await generateFiles(type, moduleName);
        }
    });

program.parse(process.argv);
