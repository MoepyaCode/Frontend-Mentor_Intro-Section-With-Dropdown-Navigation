import { assets } from "@app-assets";


export const NavigationDetails: NavigationType = [
    {
        title: 'Features',
        options: [
            {
                title: 'Todo List',
                icon: assets.Icons.IconTodo
            },
            {
                title: 'Calendar',
                icon: assets.Icons.IconCalendar
            },
            {
                title: 'Reminders',
                icon: assets.Icons.IconReminders
            },
            {
                title: 'Planning',
                icon: assets.Icons.IconPlanning
            }
        ]
    },
    {
        title: 'Company',
        options: [
            {
                title: 'History',
            },
            {
                title: 'Our Team',
            },
            {
                title: 'Blog',
            }
        ]
    }, {
        title: 'Careers',
    },
    {
        title: 'About',
    }
]