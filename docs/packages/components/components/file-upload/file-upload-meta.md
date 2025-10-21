<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'accept',
    'description': '<p>A unique file type specifier is a string that describes a type of file that may be selected by the user</p>\n<p>A valid case-insensitive filename extension, starting with a period (&quot;.&quot;) character.\nFor example: .jpg, .pdf, or .doc.</p>\n<p>A valid MIME type string, with no extensions.\nThe string audio/* meaning &quot;any audio file&quot;.\nThe string video/* meaning &quot;any video file&quot;.\nThe string image/* meaning &quot;any image file&quot;.</p>\n',
    'type': 'string[]',
    'required': true
  },
  {
    'name': 'getFileInfo',
    'description': '<p>Prepares a file for upload by retrieving upload metadata from the backend.</p>\n<p>This function is typically used before uploading a file to an external storage service\nlike Amazon S3. It returns the necessary information such as a pre-signed upload URL,\nfile UUID, and MIME type.</p>\n',
    'type': '(name: string, mimeType: string) => Promise<Pick<FileInfo, \'url\' | \'uuid\'>>',
    'required': true
  },
  {
    'name': 'isDisabled',
    'description': '<p>Determines whether the element is disabled. When <code>true</code>, the element becomes non-interactive.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isValidFile',
    'description': '<p>A validator function that checks if a file is valid for upload.\nThis function is called before uploading a file to ensure that it meets the required criteria.</p>\n',
    'type': '((file: File) => boolean) | null',
    'required': false,
    'default': 'null'
  }
]" />

<MethodsTable :data="[
  {
    'name': 'getFileInfo',
    'description': '<p>Prepares a file for upload by retrieving upload metadata from the backend.</p>\n<p>This function is typically used before uploading a file to an external storage service\nlike Amazon S3. It returns the necessary information such as a pre-signed upload URL,\nfile UUID, and MIME type.</p>\n',
    'type': '(name: string, mimeType: string) => Promise<Pick<FileInfo, \'url\' | \'uuid\'>>'
  }
]" />
