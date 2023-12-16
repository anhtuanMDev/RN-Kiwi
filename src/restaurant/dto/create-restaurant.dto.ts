export class CreateRestaurantDto {
    readonly owner: string;
    readonly name: string;
    readonly description: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly city: string;
    readonly state: string;
    readonly country: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}