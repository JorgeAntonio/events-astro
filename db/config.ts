import {column, defineDb, defineTable} from 'astro:db';

// https://astro.build/db/config

const Event = defineTable({
    columns: {
        id: column.text({primaryKey: true}),
        title: column.text(),
        description: column.text(),
        location: column.text(),
        date: column.text(),
        time: column.text(),
        image: column.text(),
        status: column.text({optional: true}),
        published_at: column.text(),
    }
})

const Form = defineTable({
    columns: {
        id: column.text({primaryKey: true}),
        name: column.text(),
        lastname: column.text(),
        email: column.text({
            unique: true
        }),
        description: column.text({optional: true}),
        option: column.text({optional: true}),
        published_at: column.text(),
    }
})

const User = defineTable({
    columns: {
        id: column.text({primaryKey: true}),
        name: column.text(),
        lastname: column.text(),
        email: column.text({
            unique: true
        }),
        description: column.text({optional: true}),
        option: column.text({optional: true}),
        registered_at: column.text(),
        present: column.boolean({optional: true, default: false}),
    }
})


export default defineDb({
    tables: {Event, Form, User}
});
