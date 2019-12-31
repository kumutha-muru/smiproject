import { Amenities } from './Amenities';
import { Studentdetails } from './StudentDetails';

export class Issue {
    courseName: string;
    courseId: String;
    courseDescription: string;
    subjectDescription: string;
    topicDescription: string;
    subjectName: string;
    subjectId: string;
    topicName: string;
    batchId: string;
    batchName: string;
    batchStatus: string;
    batchCreatedDate: string;
    duration: number;
    trainerId: string;
    trainerName: string;
    mobile: number;
    mailId: string;
    trainerQualification: string;
    technologyUndertaken: string;
    trainerPassword: string;
    date: string;
}
export class Qualification {
    degree: string;
}
export class Studentpersonaldetails {
    studentAddress: string;
    parentMobile: string;
    studentAlternateMobile: string;
    dateOfBirth: string;
    gender: string;
}
export class Assessment {
    assignDate: string;
    batchId: string;
    batchName: string[];
    assesmentType: string;
    totalQuestions: number;
    totalMarks: any[];
    status: String;
    assignAssesmentId: string[];
    full: string;
    studentName: string;
    studentId: string[];
    marksObtained: string;
    assigntest1:any;
}

export class assess {
    marks: string[];
}


export class SaveStudent{
    academicDetails:Amenities;
    studentPersonal:Studentpersonaldetails;
    student:Studentdetails;
}

