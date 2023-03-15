const { options } = require('yargs')
const yargs = require('yargs')
const {crearArchivo} =require('./helpers/multiplicar')
const colors = require('colors');

const argv=require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    demandOption:true,
                    default:false
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un numero'
                    }
                    return true
                })
                .argv

console.clear()

console.log(argv)

crearArchivo(argv.b,argv.l)