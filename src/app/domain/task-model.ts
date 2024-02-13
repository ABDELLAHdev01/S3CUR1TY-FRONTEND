export interface Task{
    title: string,
    description: string,
    startDate: Date,
    deadline: Date,
    tagIds: number[],
    createdById: number 
}