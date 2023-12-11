
export class CreateEmissionDto {
    emissionDate: string
    service: string
    channel: string
    isDangerousShipping: boolean
    creationUser: string
    observation: string
    references: []
    declaredValue: number
    seller: object
    buyer: object
    shipper: object
    shipping: object
    pickup: object
    delivery: []
    package: []
  }