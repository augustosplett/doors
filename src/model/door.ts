export default class DoorModel{
    
    #number: number
    #hasGift: boolean
    #isSelected: boolean
    #isOpen: boolean

    constructor(number: number, hasGift = false, isSelected = false, isOpen = false){
        this.#number = number
        this.#hasGift = hasGift
        this.#isSelected = isSelected
        this.#isOpen = isOpen
    }

    get number(){
        return this.#number
    }

    get hasGift(){
        return this.#hasGift
    }

    get isSelected(){
        return this.#isSelected
    }

    get isOpen(){
        return this.#isOpen
    }

    unSelect(){
        const selected = false
        return new DoorModel(this.number, this.hasGift, selected, this.isOpen)
    }

    alterSelection(){
        const selected = !this.isSelected
        return new DoorModel(this.number, this.hasGift, selected, this.isOpen)
    }

    openDoor(){
        const isOpen = true
        return new DoorModel(this.number, this.hasGift, this.isSelected, isOpen)
    }
}