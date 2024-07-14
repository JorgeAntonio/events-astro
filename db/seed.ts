import {db, Event, Form, User} from 'astro:db';

// https://astro.build/db/seed
export default async function seed () {
    await db.insert(User).values([
        {
            id: '1',
            name: 'John',
            lastname: 'Doe',
            email: 'jhondoe@gmail.com',
            description: 'This is a description',
            option: 'Peru',
            registered_at: new Date().toISOString(),
            present: false,
        },
    ]);
}
