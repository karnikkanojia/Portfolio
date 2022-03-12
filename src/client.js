import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'zdbf9tty',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'sk68lZ66wJ0rzHNVoI3cx17cGNbS9G69ssjbm7wX8B3rNgiwKjU2Xkv1z3zXd6a1tY97fqnLqgaLIJWCRbr9zS5nEXl5qWZMdEPlQK2elfXkmjD5YI0tpvwQ0kzrDmp943aKDqII9ObggNfde8SmzwQQtVqrbDYsqevQcuLZmyX5b7hFqCeF',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);