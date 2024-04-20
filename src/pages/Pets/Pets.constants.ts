interface IFilterColumns {
    name: 'gender' | 'size' | 'type'
    title: string
    options: { value: string; text: string }[]
  }
  

export const filterColumns:IFilterColumns[] = [
    {
        name: 'type',
        title: 'Espécie',
        options: [
            {
                value:'',
                text: 'Todos'
            },
            {
                value: 'dog',
                text: 'Cachorro'
            },
            {
                value: 'cat',
                text: 'Gatos'
            },
        ],
    },
    {
        name: 'size',
        title: 'Porte',
        options: [
            {
                value: '',
                text: 'Todos',
            },
            {
                value: 'small',
                text: 'Pequeno',
            },
            {
                value: 'medio',
                text: 'Médio',
            },
            {
                value: 'grande',
                text: 'Grande',
            },
        ],
    },
    {
        name: 'gender',
        title: 'Sexo',
        options: [
            {
                value: '',
                text: 'Todos',
            },
            {
                value: 'femea',
                text: 'Femea',
            },
            { 
                value: 'macho',
                text: 'Macho',

            },
        ],
    },
]