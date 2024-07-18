import { parse, resolve } from 'path';
import fg from 'fast-glob';
import MarkdownIt from 'markdown-it';
import { createChecker } from 'vue-component-meta';
import { fileURLToPath } from 'node:url';
export const components = {
    toast: [
        'AppToast',
    ],
};
// const traverse = _traverse.default
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const md = new MarkdownIt();
const checkerOptions = {
    forceUseTs: true,
    printer: { newLine: 1 },
};
const tsconfigChecker = createChecker(resolve(__dirname, '../../tsconfig.app.json'), checkerOptions);
const allComponents = fg.sync(['src/components/**/*.vue'], {
    cwd: resolve(__dirname, '../../packages/components'),
    absolute: true,
});
const listOfComponents = Object.values(components).flatMap(i => i);
const primitiveComponents = allComponents.filter(i => listOfComponents.includes(parse(i).name));
function parseTypeFromSchema(schema) {
    if (typeof schema === 'object' && (schema.kind === 'enum' || schema.kind === 'array')) {
        const isFlatEnum = schema.schema?.every((val) => typeof val === 'string');
        const enumValue = schema?.schema?.filter((i) => i !== 'undefined') ?? [];
        if (isFlatEnum && /^[A-Z]/.test(schema.type))
            return enumValue.join(' | ');
        else if (typeof schema.schema?.[0] === 'object' && schema.schema?.[0].kind === 'enum')
            return schema.schema.map((s) => parseTypeFromSchema(s)).join(' | ');
        else
            return schema.type;
    }
    else if (typeof schema === 'object' && schema.kind === 'object') {
        return schema.type;
    }
    else if (typeof schema === 'string') {
        return schema;
    }
    else {
        return '';
    }
}
function parseMeta(meta) {
    const props = meta.props
        .filter((prop) => !prop.global)
        .map((prop) => {
        let defaultValue = prop.default;
        let type = prop.type;
        const { name, description, required } = prop;
        if (name === 'as')
            defaultValue = defaultValue ?? '"div"';
        if (defaultValue === 'undefined')
            defaultValue = undefined;
        if (!type.includes('AcceptableValue'))
            type = parseTypeFromSchema(prop.schema) || type;
        return ({
            name,
            description: md.render(description),
            type: type.replace(/\s*\|\s*undefined/g, ''),
            required,
            default: defaultValue ?? undefined,
        });
    })
        .sort((a, b) => a.name.localeCompare(b.name));
    const events = meta.events
        .map((event) => {
        const { name, type } = event;
        return ({
            name,
            description: md.render((event.description ?? '').replace(/^[ \t]+/gm, '')),
            type: type.replace(/\s*\|\s*undefined/g, ''),
        });
    })
        .sort((a, b) => a.name.localeCompare(b.name));
    const defaultSlot = meta.slots?.[0];
    const slots = [];
    if (defaultSlot && defaultSlot.type !== '{}') {
        const schema = defaultSlot.schema;
        if (typeof schema === 'object' && schema.schema) {
            Object.values(schema.schema).forEach((childMeta) => {
                slots.push({
                    name: childMeta.name,
                    description: md.render(childMeta.description),
                    type: parseTypeFromSchema(childMeta.schema),
                });
            });
        }
    }
    const methods = meta.exposed
        .filter((expose) => typeof expose.schema === 'object' && expose.schema.kind === 'event')
        .map((expose) => ({
        name: expose.name,
        description: md.render(expose.description),
        type: expose.type,
    }));
    return {
        props,
        events,
        slots,
        methods,
    };
}
function generateDocsForComponents() {
    primitiveComponents.forEach((componentPath) => {
        const componentName = parse(componentPath).name;
        // const meta = parseMeta(tsconfigChecker.getComponentMeta(componentPath))
        console.log(tsconfigChecker.getComponentMeta(componentPath));
    });
    // const metaDirPath = resolve(__dirname, 'docs/components')
    // if (!existsSync(metaDirPath))
    //   mkdirSync(metaDirPath, { recursive: true })
    // const metaMdFilePath = join(metaDirPath, `${componentName}.md`)
    // let parsedString = `# ${componentName}\n\n`
    // if (meta.props.length) {
    //   parsedString += '## Props\n\n'
    //   parsedString += '| Prop | Type | Description | Default |\n'
    //   parsedString += '| ---- | ---- | ----------- | ------- |\n'
    //   meta.props.forEach((prop: { name: any; type: any; description: any; default: any }) => {
    //     parsedString += `| ${prop.name} | ${prop.type} | ${prop.description} | ${prop.default ?? ''} |\n`
    //   })
    //   parsedString += '\n'
    // }
    // if (meta.slots.length) {
    //   parsedString += '## Slots\n\n'
    //   parsedString += '| Slot name | Type | Description |\n'
    //   parsedString += '| --------- | ---- | ----------- |\n'
    //   meta.slots.forEach(slot => {
    //     parsedString += `| ${slot.name} | ${slot.type} | ${slot.description} |\n`
    //   })
    //   parsedString += '\n'
    // }
    // if (meta.events.length) {
    //   parsedString += '## Events\n\n'
    //   parsedString += '| Event name | Type | Description |\n'
    //   parsedString += '| ---------- | ---- | ----------- |\n'
    //   meta.events.forEach((event: { name: any; type: any; description: any }) => {
    //     parsedString += `| ${event.name} | ${event.type} | ${event.description} |\n`
    //   })
    //   parsedString += '\n'
    // }
    // if (meta.methods.length) {
    //   parsedString += '## Methods\n\n'
    //   meta.methods.forEach((method: { name: any; description: any; type: any }) => {
    //     parsedString += `### ${method.name}\n\n`
    //     parsedString += `${method.description}\n\n`
    //     parsedString += `**Type:** ${method.type}\n\n`
    //   })
    //   parsedString += '\n'
    // }
    // writeFileSync(metaMdFilePath, parsedString)
}
generateDocsForComponents();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2dlbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy90YW55YS9EZXNrdG9wL1dJU0VNRU4vdnVlLWNvcmUvZG9jcy8iLCJzb3VyY2VzIjpbInNjcmlwdHMvYXV0b2dlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVEsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUUzQyxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFDMUIsT0FBTyxVQUFVLE1BQU0sYUFBYSxDQUFBO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUcsTUFBTSxvQkFBb0IsQ0FBQTtBQUduRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBR3hDLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRztJQUN4QixLQUFLLEVBQUU7UUFDTCxVQUFVO0tBQ1g7Q0FDRixDQUFBO0FBRUQscUNBQXFDO0FBRXJDLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzlELE1BQU0sRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7QUFFM0IsTUFBTSxjQUFjLEdBQUc7SUFDckIsVUFBVSxFQUFFLElBQUk7SUFDaEIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtDQUN4QixDQUFBO0FBRUQsTUFBTSxlQUFlLEdBQUcsYUFBYSxDQUNuQyxPQUFPLENBQUMsU0FBUyxFQUFFLHlCQUF5QixDQUFDLEVBQzdDLGNBQWMsQ0FDZixDQUFBO0FBRUQsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLEVBQUU7SUFDekQsR0FBRyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsMkJBQTJCLENBQUM7SUFDcEQsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDLENBQUE7QUFFRixNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbEUsTUFBTSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBRS9GLFNBQVMsbUJBQW1CLENBQUMsTUFBVztJQUN0QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN0RixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUE7UUFDOUUsTUFBTSxTQUFTLEdBQUcsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7UUFFN0UsSUFBSSxVQUFVLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUN6QixJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU07WUFDbkYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7O1lBRXhFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQTtJQUN0QixDQUFDO1NBQ0ksSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUNoRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDcEIsQ0FBQztTQUNJLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDcEMsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDO1NBQ0ksQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFTO0lBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1NBQ3JCLE1BQU0sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1FBQ2pCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDL0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNwQixNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFFNUMsSUFBSSxJQUFJLEtBQUssSUFBSTtZQUNmLFlBQVksR0FBRyxZQUFZLElBQUksT0FBTyxDQUFBO1FBRXhDLElBQUksWUFBWSxLQUFLLFdBQVc7WUFDOUIsWUFBWSxHQUFHLFNBQVMsQ0FBQTtRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztZQUNuQyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQTtRQUVqRCxPQUFPLENBQUM7WUFDTixJQUFJO1lBQ0osV0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztZQUM1QyxRQUFRO1lBQ1IsT0FBTyxFQUFFLFlBQVksSUFBSSxTQUFTO1NBQ25DLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLENBQW1CLEVBQUUsQ0FBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFFaEYsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07U0FDdkIsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDbEIsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUE7UUFDNUIsT0FBTyxDQUFDO1lBQ04sSUFBSTtZQUNKLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztTQUM3QyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFtQixFQUFFLENBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBRWhGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNuQyxNQUFNLEtBQUssR0FBMEQsRUFBRSxDQUFBO0lBRXZFLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDN0MsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQTtRQUNqQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBYyxFQUFFLEVBQUU7Z0JBQ3RELEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO29CQUNwQixXQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO29CQUM3QyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztpQkFDNUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO1NBQ3pCLE1BQU0sQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7U0FDNUYsR0FBRyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNqQixXQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtLQUNsQixDQUFDLENBQUMsQ0FBQTtJQUVMLE9BQU87UUFDTCxLQUFLO1FBQ0wsTUFBTTtRQUNOLEtBQUs7UUFDTCxPQUFPO0tBQ1IsQ0FBQTtBQUNILENBQUM7QUFFRCxTQUFTLHlCQUF5QjtJQUNoQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUM1QyxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFBO1FBQy9DLDBFQUEwRTtRQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0lBQzlELENBQUMsQ0FBQyxDQUFBO0lBRUYsNERBQTREO0lBQzVELGdDQUFnQztJQUNoQyxnREFBZ0Q7SUFFaEQsa0VBQWtFO0lBRWxFLDhDQUE4QztJQUU5QywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLGdFQUFnRTtJQUNoRSxnRUFBZ0U7SUFDaEUsNkZBQTZGO0lBQzdGLHdHQUF3RztJQUN4RyxPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLElBQUk7SUFFSiwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLDJEQUEyRDtJQUMzRCwyREFBMkQ7SUFDM0QsaUNBQWlDO0lBQ2pDLGdGQUFnRjtJQUNoRixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLElBQUk7SUFFSiw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLDREQUE0RDtJQUM1RCw0REFBNEQ7SUFDNUQsaUZBQWlGO0lBQ2pGLG1GQUFtRjtJQUNuRixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLElBQUk7SUFFSiw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLG1GQUFtRjtJQUNuRiwrQ0FBK0M7SUFDL0Msa0RBQWtEO0lBQ2xELHFEQUFxRDtJQUNyRCxPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLElBQUk7SUFFSiw4Q0FBOEM7QUFDaEQsQ0FBQztBQUVELHlCQUF5QixFQUFFLENBQUEifQ==