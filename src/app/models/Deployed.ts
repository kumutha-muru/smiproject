export class Deployed {
    batchName: string;
    studentName: string;
    dateOfJoining: String;
    date: String;
    teamName: String;
}
export class Intraining {
    batchName: string;
    studentName: string;
    dateOfJoining: String;
}
export class Discontinued {
    batchName: string;
    studentName: string;
    dateOfJoining: String;
    date: String;
    reason: String;
}
export class Terminated {
    batchName: string;
    studentName: string;
    dateOfJoining: String;
    date: String;
    reason: String;
}
export class Dailyatten {
    batchName: string;
    studentName: string;
    forenoon: String;
    afternoon: String;
}
export class Weeklyatten {
    batchName: string;
    studentName: string;
    forenoon: String;
    afternoon: String;
}
export class Monthlyatten {
    batchName: string;
    studentName: string;
    forenoon: String;
    afternoon: String;
}
export class Batchatten {
    batchName: string;
    batchId: string;
    studentName: string;
    total:number;
    student:string[];
    absent:string[];
    present:string[];
}
export class Studentatten {
    batchName: string;
    dateOfJoining: String;
    present: string;
    absent: string;
}
export class Dailytopic {
    batchName: string;
    courseName: string;
    subjectName: string;
    topicName: string;
}
export class Weeklytopic {
    batchName: string;
    courseName: string;
    subjectName: string;
    topicName: string;
}
export class Monthlytopic {
    batchName: string;
    courseName: string;
    subjectName: string;
    topicName: string;
}
export class Batchtopic {
    date: string;
    courseName: string;
    subjectName: string;
    topicName: string;
}