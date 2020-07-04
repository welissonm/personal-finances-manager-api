export default interface BaseEntity {
    id: number;
    uuid: string;
    readonly createdAt: Date;
    readonly updatedAt?: Date;
    enabled: boolean;
};