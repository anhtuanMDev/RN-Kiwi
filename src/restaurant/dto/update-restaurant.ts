export class UpdateRestaurantDto {
    readonly name: string;
    readonly description: string;
    readonly address: string;
    readonly city: string;
    readonly state: string;
    readonly country: string;
    readonly phone: string;
    readonly email: string;
    readonly updatedAt: Date;
}