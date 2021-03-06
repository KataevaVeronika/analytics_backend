import {IntermediateCertificationEnum, StepsEnum, WorkProgramStatusEnum} from "./enum";

const PRIMARY_VOCATIONAL_EDUCATION = 'primary_vocational_education';
const SECONDARY_VOCATIONAL_EDUCATION = 'secondary_vocational_education';
const BACHELOR = 'bachelor';
const SPECIALIST = 'specialist';
const MASTER = 'master';

export const specializationObject: any = {
    [PRIMARY_VOCATIONAL_EDUCATION]: 'Среднее профессиональное образование',
    [SECONDARY_VOCATIONAL_EDUCATION]: 'Магистр профессионального образования',
    [BACHELOR]: 'Бакалавр',
    [SPECIALIST]: 'Специалист',
    [MASTER]: 'Магистр',
}

export const specialization = [
    {
        value: PRIMARY_VOCATIONAL_EDUCATION,
        label: 'Среднее профессиональное образование'
    },
    {
        value: SECONDARY_VOCATIONAL_EDUCATION,
        label: 'Магистр профессионального образования'
    },
    {
        value: BACHELOR,
        label: 'Бакалавр'
    },
    {
        value: SPECIALIST,
        label: 'Специалист'
    },
    {
        value: MASTER,
        label: 'Магистр'
    }
];

export const workProgramStatusesRussian: any = {
    [WorkProgramStatusEnum.AT_WORK]: 'В работе',
    [WorkProgramStatusEnum.EXPERTISE]: 'На экспертизе',
    [WorkProgramStatusEnum.APPROVE]: 'Одобрено',
    [WorkProgramStatusEnum.ARCHIVE]: 'В архиве',
}


export const IntermediateCertificationTypes: any = {
    [IntermediateCertificationEnum.EXAM]: 'Экзамен',
    [IntermediateCertificationEnum.DIF_CREDIT]: 'Дифференцируемый зачет',
    [IntermediateCertificationEnum.CREDIT]: 'Зачет',
    [IntermediateCertificationEnum.COURSE_WORK]: 'Курсовая работа',
}

export const workProgramStatusesColors: any = {
    [WorkProgramStatusEnum.AT_WORK]: '#009aff',
    [WorkProgramStatusEnum.EXPERTISE]: '#C000FF',
    [WorkProgramStatusEnum.APPROVE]: '#2abb00',
    [WorkProgramStatusEnum.ARCHIVE]: '#ccc',
}

export const steps = {
    [StepsEnum.GENERAL]: 'Главное',
    [StepsEnum.PREREQUISITES]: 'Пререквизиты',
    [StepsEnum.SECTIONS]: 'Разделы',
    [StepsEnum.TOPICS]: 'Темы',
    [StepsEnum.LITERATURE]: 'Источники',
    [StepsEnum.EVALUATION]: 'Оценочные средства',
    [StepsEnum.INTERMEDIATE_CERTIFICATION]: 'Оценочные средства промежуточной аттестации',
    [StepsEnum.RESULTS]: 'Результаты обучения',
    [StepsEnum.PLANS]: 'Связанные с рпд учебные планы и направления',
}

export const years = [
    {
        value: '2001/2002',
        label: '2001/2002',
    },
    {
        value: '2002/2003',
        label: '2002/2003',
    },
    {
        value: '2003/2004',
        label: '2003/2004',
    },
    {
        value: '2004/2005',
        label: '2004/2005',
    },
    {
        value: '2005/2006',
        label: '2005/2006',
    },
    {
        value: '2006/2007',
        label: '2006/2007',
    },
    {
        value: '2007/2008',
        label: '2007/2008',
    },
    {
        value: '2008/2009',
        label: '2008/2009',
    },
    {
        value: '2009/2010',
        label: '2009/2010',
    },
    {
        value: '2010/2011',
        label: '2010/2011',
    },
    {
        value: '2011/2012',
        label: '2011/2012',
    },
    {
        value: '2012/2013',
        label: '2012/2013',
    },
    {
        value: '2013/2014',
        label: '2013/2014',
    },
    {
        value: '2014/2015',
        label: '2014/2015',
    },
    {
        value: '2015/2016',
        label: '2015/2016',
    },
    {
        value: '2016/2017',
        label: '2016/2017',
    },
    {
        value: '2017/2018',
        label: '2017/2018',
    },
    {
        value: '2018/2019',
        label: '2018/2019',
    },
    {
        value: '2019/2020',
        label: '2019/2020',
    },
    {
        value: '2020/2021',
        label: '2020/2021',
    },
    {
        value: '2021/2022',
        label: '2021/2022',
    },
    {
        value: '2022/2023',
        label: '2022/2023',
    },
]