import { CenterModel } from '../models/CenterModel';

export const  CENTER_MOCK: CenterModel = {
    _id: '5c7dd7546407c20192adb1f7',
    status: 'IN_PROGRESS',
    providerId: '5c7dd7546407c20192adb1f6',
    zipCode: '60613',
    totalReviews: 20,
    rating: 4.5,
    location: {
        latitude: 41.958099,
        longitude: -87.64696819999999
    },
    description: 'Hello this is Pablo\'s center description',
    firstFreeHour: true,
    groupCosts: [
        {
            type: 'NEW_BORN_TO_TWENTY_FOUR',
            firstChildCost: 20,
            secondChildCost: 15,
            thirdChildCost: 10,
            spots: 10
        },
        {
            type: 'TWO_YEARS_TO_FOUR_YEARS',
            firstChildCost: 20,
            secondChildCost: 15,
            thirdChildCost: 10,
            spots: 10
        },
        {
            type: 'FIVE_YEARS_TO_MAX_AGE',
            firstChildCost: 20,
            secondChildCost: 15,
            thirdChildCost: 10,
            spots: 10,
        }
    ],
    name: 'Pablo\'s Center',
    operationHours: [
        {
            day: 'MONDAY',
            startHour: 7,
            endHour: 17
        },
        {
            day: 'TUESDAY',
            startHour: 7,
            endHour: 17
        },
        {
            day: 'WEDNESDAY',
            startHour: 7,
            endHour: 17
        },
        {
            day: 'THURSDAY',
            startHour: 7,
            endHour: 17
        },
        {
            day: 'FRIDAY',
            startHour: 7,
            endHour: 17
        },
        {
            day: 'SATURDAY',
            startHour: 7,
            endHour: 13
        }
    ],
    paymentType: 'CASH_PAYMENT',
    profileDescription: 'Hello this is my profile description',
    spacePictures: [
        {
            url: 'https://s3.amazonaws.com/dev-dropinfun-provider-images/5c7dd7546407c20192adb1f6/ca332fec-43d0-4d2a-9fe9-2406f16c302b'
        },
        {
            url: 'https://s3.amazonaws.com/dev-dropinfun-provider-images/5c7dd7546407c20192adb1f6/04f25b2f-86bf-4701-a86d-53602b0244ef'
        },
        {
            url: 'https://s3.amazonaws.com/dev-dropinfun-provider-images/5c7dd7546407c20192adb1f6/99da0ef7-70cb-4b21-a7d2-6fb92b0a7d43'
        },
        {
            url: 'https://s3.amazonaws.com/dev-dropinfun-provider-images/5c7dd7546407c20192adb1f6/c1cf56d5-9df3-4108-ae73-3f2bc4f18067'
        },
        {
            url: 'https://s3.amazonaws.com/dev-dropinfun-provider-images/5c7dd7546407c20192adb1f6/781a1eb2-7077-425f-8bc0-0d230e4ee0e1'
        }
    ],
    specialPackages: [
        {
            numberOfHours: 20,
            cost: 60,
            months: 1
        }
    ],
    summerCamps: [
        {
            description: 'This is the sumer camp #1',
            availableSpots: [
                {
                    type: 'NEW_BORN_TO_TWENTY_FOUR',
                    spots: '10',
                    fee: '20'
                },
                {
                    type: 'TWO_YEARS_TO_FOUR_YEARS',
                    spots: '10',
                    fee: '30'
                },
                {
                    type: 'FIVE_YEARS_TO_MAX_AGE',
                    spots: '10',
                    maxAge: '',
                    fee: '20'
                }
            ]
        }
    ],
    type: 'HOME_BASED',
    profilePicture: {
        url: 'https://s3.amazonaws.com/dev-dropinfun-provider-images/5c7dd7546407c20192adb1f6/471886a2-6f2d-4026-85b5-b8bb12219b39'
    }
};