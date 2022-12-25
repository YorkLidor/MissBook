import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { syncStorageService } from './storage.service.js'
// import myJson from './example.json' assert {type: 'json'};

const BOOK_KEY = 'bookDB'

export const BookService = {
    query,
    get,
    remove,
    save,
    getEmptyCar,
    getDefaultFilter,
}

function query() {
    return storageService.query(BOOK_KEY).then((books)=>{
        if(!books || !books.length){
            const demoBooks = _createBooks()
            syncStorageService.saveToStorage(BOOK_KEY,demoBooks)
            return demoBooks
        }else return books
    })

        // .then(cars => {
        //     if (filterBy.txt) {
        //         const regex = new RegExp(filterBy.txt, 'i')
        //         cars = cars.filter(car => regex.test(car.vendor))
        //     }
        //     if (filterBy.minSpeed) {
        //         cars = cars.filter(car => car.maxSpeed >= filterBy.minSpeed)
        //     }
        //     return cars
        // })
}

function get(carId) {
    return storageService.get(BOOK_KEY, carId)
    // return axios.get(CAR_KEY, carId)
}

function remove(carId) {
    return storageService.remove(BOOK_KEY, carId)
}

function save(car) {
    if (car.id) {
        return storageService.put(BOOK_KEY, car)
    } else {
        return storageService.post(BOOK_KEY, car)
    }
}

function getEmptyCar(vendor = '', maxSpeed = '') {
    return { id: '', vendor, maxSpeed }
}

function getDefaultFilter() {
    return { txt: '', minSpeed: '' }
}

function _createBooks() {
    // let books = utilService.loadFromStorage(BOOK_KEY)
    return [
            {
                id: "OXeMG8wNskc",
                title: "metus hendrerit",
                description: "placerat nisi sodales suscipit tellus",
                thumbnail: "http://ca.org/books-photos/20.jpg",
                listPrice: {
                    amount: 109,
                    currencyCode: "EUR",
                    isOnSale: false,
                }
            },
            {
                id: "lolo",
                title: "puki puki",
                description: 'pppppppp ppppppppp pppppppppp',
                thumbnail: "http://ca.org/books-photos/20.jpg",
                listPrice: {
                    amount: 120,
                    currencyCode: "SH",
                    isOnSale: false,
                }
            },
            {
                id: "tit",
                title: "toki toki",
                description: "tttttttttt ttttttt t",
                thumbnail: "http://ca.org/books-photos/20.jpg",
                listPrice: {
                    amount: 80,
                    currencyCode: "EUR",
                    isOnSale: false,
                }
            }
        ]
}

// function _createBook(vendor, maxSpeed = 250) {
//     const car = getEmptyCar(vendor, maxSpeed)
//     car.id = utilService.makeId()
//     return car
// }

