import { Instructors } from "./instructor.model";

export class Course {
    id: number;
    title: string;
    duration: number;
    rating: number;
    student: number;
    preview: string;
    avatar: string;
    instructor: Instructors;
}
