const randint = (min, max) => Math.floor(min + Math.random() * (max - min + 1))
const randEl = arr => arr[randint(0,arr.length-1)]

function shuffle(array) {
    for(let i = array.length - 1; i>0; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

let a = []
for(let i=0;i<7;i++) a.push(randint(10,50))

let words=[['ухо','подкова','наковальня'],['зима','жаворонок','мороз'],['лихорадка','золото','нефть'],['трактор','гусеница','бабочка'],['рожь','поле','напряжённость'],['пилот','вертолёт','акула'],['пчела','улей','город'],['пещера','сталактит','озеро'],['жираф','слон','моська'],['подсолнечник','масло','двигатель']]

const tasks=[
    //A|B|C=A+B+C-A&B-B&C
    [
        {name:'A | B | C', val:a[0]+a[1]+a[2]+a[3]+a[4], question:true},
        {name:'A', val:a[0]+a[1], question:true},
        {name:'B', val:a[1]+a[2]+a[3], question:true},
        {name:'C', val:a[3]+a[4], question:true},
        {name:'A & B', val:a[1], question:true},
        {name:'B & C', val:a[3], question:true},
        {name:'A & C', val:0, question:false}
    ],

    //A|B|C=A|B+C-B&C;
    [
        {name:'A | B | C', val:a[0]+a[1]+a[2]+a[3]+a[4], question:true},
        {name:'A', val:a[0]+a[1], question:false},
        {name:'B', val:a[1]+a[2]+a[3], question:false},
        {name:'C', val:a[3]+a[4], question:true},
        {name:'A | B', val:a[0]+a[1]+a[2]+a[3], question:true},
        {name:'B & C', val:a[3], question:true},
        {name:'A & C', val:0, question:false}
    ],

    //A|B|C=A|B+C-B&C;
    [
        {name:'A | B | C', val:a[0]+a[1]+a[2]+a[3]+a[4], question:true},
        {name:'A', val:a[0]+a[1], question:false},
        {name:'A | B', val:a[0]+a[1]+a[2]+a[3], question:true},
        {name:'C', val:a[3]+a[4], question:true},
        {name:'A & B', val:a[1], question:false},
        {name:'B & C', val:a[3], question:true},
        {name:'A & C', val:0, question:false}
    ],

    //A|B|C=A+B+C-A&B-A&C-B&C+A&B&C
    [
        {name:'A | B | C', val:a[0]+a[1]+a[2]+a[3]+a[4]+a[5]+a[6], question:true},
        {name:'A', val:a[0]+a[1]+a[3]+a[4], question:true},
        {name:'B', val:a[1]+a[2]+a[4]+a[5], question:true},
        {name:'C', val:a[3]+a[4]+a[5]+a[6], question:true},
        {name:'A & B', val:a[1]+a[4], question:true},
        {name:'A & C', val:a[3]+a[4], question:true},
        {name:'B & C', val:a[4]+a[5], question:true},
        {name:'A & B & C', val:a[4], question:true}
    ],

    //A|B|C=A|B+C-A&C-B&C+A&B&C
    [
        {name:'A | B | C', val:a[0]+a[1]+a[2]+a[3]+a[4]+a[5]+a[6], question:true},
        {name:'A', val:a[0]+a[1]+a[3]+a[4], question:false},
        {name:'B', val:a[1]+a[2]+a[4]+a[5], question:false},
        {name:'C', val:a[3]+a[4]+a[5]+a[6], question:true},
        {name:'A | B', val:a[0]+a[1]+a[2]+a[3]+a[4]+a[5], question:true},
        {name:'A & C', val:a[3]+a[4], question:true},
        {name:'B & C', val:a[4]+a[5], question:true},
        {name:'A & B & C', val:a[4], question:true}
    ],

    //A|B|C=A|B+B|C-B-A&C+A&B&C; 
    [
        {name:'A | B | C', val:a[0]+a[1]+a[2]+a[3]+a[4]+a[5]+a[6], question:true},
        {name:'A', val:a[0]+a[1]+a[3]+a[4], question:false},
        {name:'B', val:a[1]+a[2]+a[4]+a[5], question:true},
        {name:'C', val:a[3]+a[4]+a[5]+a[6], question:false},
        {name:'A | B', val:a[0]+a[1]+a[2]+a[3]+a[4]+a[5], question:true},
        {name:'B | C', val:a[1]+a[2]+a[3]+a[4]+a[5]+a[6], question:true},
        {name:'A & C', val:a[3]+a[4], question:true},
        {name:'A & B & C', val:a[4], question:true}
    ]
]

let group=randEl(tasks)
const question = randEl(group.filter(el=>el.question))
group = group.filter(el => el.name != question.name)
group = shuffle(group)
words = randEl(words)

export default {group, question, words}