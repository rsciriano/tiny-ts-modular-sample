
import {foo} from 'foo'
import {bar} from 'bar'
import * as $ from 'jquery'

$(()=>{
    $('body').append('<h3>', foo.hello("Roberto"), '</h3>');
    $('body').append('<h3>', (bar.hello()), '</h3>');
})
