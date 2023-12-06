// export const formDataFromBackend = [
//     { type: 'text', name: 'title', placeholder: 'Title', required: true },
//     { type: 'text', name: 'subtitle', placeholder: 'Subtitle', required: true },
//     { type: 'text', name: 'description', placeholder: 'Description', required: true },
//     {
//         type: 'select',
//         name: 'isHidden',
//         required: true,
//     },
//     {
//         type: 'image',
//         name: 'image',
//         label: 'Upload Image',
//         required: true,
//     },
// ];

const formDataHome = [
    { type: 'text', name: 'title', placeholder: 'Title', required: true },
    { type: 'text', name: 'subtitle', placeholder: 'Subtitle', required: true },
    { type: 'text', name: 'description', placeholder: 'Description', required: true },
    { type: 'text', name: 'email', placeholder: 'Email', required: true },
    { type: 'image', name: 'image', label: 'Upload Image', required: true },
];

const formDataAbout = [
    { type: 'text', name: 'description', placeholder: 'Description', required: true },
    { type: 'text', name: 'descriptionTitle', placeholder: 'Description Title', required: true },
    { type: 'text', name: 'descriptionSubtitle', placeholder: 'description Subtitle', required: true },
    { type: 'image', name: 'model', label: 'Upload Model', required: true },
];

const formDataWork = [{ type: 'text', name: 'title', placeholder: 'Title', required: true }, { type: '' }];

const formDataCard = [
    { type: 'text', name: 'title', placeholder: 'Title', required: true },
    { type: 'text', name: 'subtitle', placeholder: 'Subtitle', required: true },
    { type: 'text', name: 'description', placeholder: 'Description', required: true },
    { type: 'image', name: 'image', label: 'Image' },
    { type: 'text', name: 'link', placeholder: 'Link', required: true },
    {
        type: 'select',
        name: 'isHidden',
        required: true,
        options: [
            { value: 'true', label: 'true' },
            { value: 'false', label: 'false' },
        ],
    },
];

const formData = {
    home: [...formDataHome],
    about: [...formDataAbout],
    work: [...formDataWork],
    card: [...formDataCard],
};

export default formData;

// model Card {
//     id Int @id @default(autoincrement())
//
//     title       String
//     subtitle    String
//     description String
//     image       String
//     link        String
//     isHidden    Boolean
// }
//
// model Contact {
//     id Int @id @default(autoincrement())
//
//     email       String
//     phoneNumber String
// }
