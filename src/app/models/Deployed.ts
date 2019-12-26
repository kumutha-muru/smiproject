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
    total: number;
    student: string[];
    absent: string[];
    present: string[];
}
export class Studentatten {
    studentatten: string[];
    batchName: string;
    dateOfJoining: String;
    present: string;
    absent: string;
}
export class Dailytopic {
    dailytopic: String[];
    batchName: string;
    courseName: string;
    subjectName: string;
    topicName: string;
}
export class Monthlytopic {
    monthly: String[];
    batchName: string;
    courseName: string;
    subjectName: string;
    topicName: string;
}
export class Batchtopic {
    batchtopic: string[];
    date: string;
    courseName: string;
    subjectName: string;
    topicName: string;
}