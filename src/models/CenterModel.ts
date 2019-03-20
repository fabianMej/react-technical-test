export interface CenterModel {
    _id: string;
    status: string;
    providerId: string;
    zipCode: string;
    totalReviews: number;
    rating: number;
    location: {
        latitude: number,
        longitude: Number
    };
    description: string;
    firstFreeHour: boolean;
    groupCosts: Array<{
        type: string,
        firstChildCost: number,
        secondChildCost: number,
        thirdChildCost: number,
        spots: number
    }>;
    name: string,
    operationHours: Array<{
        day: string,
        startHour: number,
        endHour: number
    }>;
    paymentType: string,
    profileDescription: string,
    spacePictures: Array<{
        url: string
    }>;
    specialPackages: Array<{
        numberOfHours: number,
        cost: number,
        months: number
    }>;
    summerCamps: Array<{
        description: string,
        availableSpots: Array<{
            type: string,
            spots: string,
            maxAge?: string,
            fee: string
        }>
    }>;
    type: string,
    profilePicture: {
        url: string
    }
}