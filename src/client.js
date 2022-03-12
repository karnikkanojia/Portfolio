import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'zdbf9tty',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skZyBzCVSvVSFY5IBJXvsuSaQSAnl0HWn9tdACvGHvWUg1pkIymXBGO58ri42lAygspVsc5hpb9qmxYFE9EmE6VlTDuQA4XsYcET09Gg4xH2QsQ3DgQlxy4s11mknoaTpLK5D4SydGqQElXCKMLHGB7hNIyhs0tvCPjILG0ZuEJYYpjyuySC',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);