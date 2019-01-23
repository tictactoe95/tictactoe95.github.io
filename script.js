var _buckets = document.querySelectorAll('.sub-contain')
var marks = document.querySelectorAll('.mark')
var haswon ; 
var _alert = document.querySelector('.alertmessage')

var value = 'x';
var fulfill = 0;
var xrow1  = [];
var xrow2  = []; 
var xrow3  = [];
var xcol1  = [];
var xcol2  = [];
var xcol3  = [];
var xdiag1 = [];
var xdiag2 = [];


var orow1 = [];
var orow3 = [];
var orow2 = []; 
var ocol1 = [];
var ocol2 = [];
var ocol3 = [];
var odiag1= [];
var odiag2= [];
   

   _buckets.forEach(bucket => {

        bucket.addEventListener('click', function(){
        
                if(bucket.innerHTML  == '')
                {
                bucket.innerHTML = value; 
                  fulfill += 1
                    if(value == 'x'){

                      if(bucket.getAttribute('value') <= 2){
                             xrow1.push(bucket.getAttribute('value'));
                             if(bucket.getAttribute('value') == 0){
                                xcol1.push(bucket.getAttribute('value'))
                                xdiag1.push(bucket.getAttribute('value'))
                             }
                             else if(bucket.getAttribute('value') == 1){
                                 xcol2.push(bucket.getAttribute('value'))
                                
                             }else{
                                 xcol3.push(bucket.getAttribute('value'))
                                 xdiag2.push(bucket.getAttribute('value'))
                             }

                      }else if(bucket.getAttribute('value') >= 3 && bucket.getAttribute('value') <= 5 ){

                        xrow2.push(bucket.getAttribute('value'));
                           if(bucket.getAttribute('value') == 3){
                               xcol1.push(bucket.getAttribute('value'))
                           }
                           else if(bucket.getAttribute('value') == 4){
                               xcol2.push(bucket.getAttribute('value'))
                               xdiag1.push(bucket.getAttribute('value'))
                               xdiag2.push(bucket.getAttribute('value'))
                           }else{
                            xcol3.push(bucket.getAttribute('value'))
                           }
                      }
                      else{
                          xrow3.push(bucket.getAttribute('value'))
                          if(bucket.getAttribute('value') == 6){
                              xcol1.push(bucket.getAttribute('value'))
                              xdiag2.push(bucket.getAttribute('value'))
                          }
                          else if(bucket.getAttribute('value') == 7){
                              xcol2.push(bucket.getAttribute('value'))
                          }else{
                              xcol3.push(bucket.getAttribute('value'))
                              xdiag1.push(bucket.getAttribute('value'))
                          }
                      }
                     value = 'o'
                      }
                  else{
                            if(bucket.getAttribute('value') <= 2){
                                orow1.push(bucket.getAttribute('value'))
                                if(bucket.getAttribute('value') == 0){
                                   ocol1.push(bucket.getAttribute('value'))
                                   odiag1.push(bucket.getAttribute('value'))
                                }
                                else if(bucket.getAttribute('value') == 1){
                                    ocol2.push(bucket.getAttribute('value'))
                                    
                                }else{
                                    ocol3.push(bucket.getAttribute('value'))
                                    odiag2.push(bucket.getAttribute('value'))
                                }
   
                         }else if(bucket.getAttribute('value') >= 3 && bucket.getAttribute('value') <= 5 ){
   
                           orow2.push(bucket.getAttribute('value'))
                              if(bucket.getAttribute('value') == 3){
                                  ocol1.push(bucket.getAttribute('value'))
                              }
                              else if(bucket.getAttribute('value') == 4){
                                  ocol2.push(bucket.getAttribute('value'))
                                  odiag1.push(bucket.getAttribute('value'))
                                  odiag2.push(bucket.getAttribute('value'))
                              }else{
                               ocol3.push(bucket.getAttribute('value'))
                              }
                         }
                         else{
                             orow3.push(bucket.getAttribute('value'))
                             if(bucket.getAttribute('value') == 6){
                                 ocol1.push(bucket.getAttribute('value'))
                                 odiag2.push(bucket.getAttribute('value'))
                             }
                             else if(bucket.getAttribute('value') == 7){
                                 ocol2.push(bucket.getAttribute('value'))
                             }else{
                                 ocol3.push(bucket.getAttribute('value'))
                                 odiag1.push(bucket.getAttribute('value'))
                             }
                         }
                    value = 'x'
                     }

                     
                      if(xrow1.length == 3){
                    
                          for(var i=0 ; i< xrow1.length ; i++){
                              _buckets[xrow1[i]].style.backgroundColor = 'red'
                          }
                      }else if(xrow2.length == 3){
                      
                        for(var i=0 ; i< xrow2.length ; i++){
                            _buckets[xrow2[i]].style.backgroundColor = 'red'
                        }
                      }else if(xrow3.length == 3){
                      
                        for(var i=0 ; i< xrow3.length ; i++){
                            _buckets[xrow3[i]].style.backgroundColor = 'red'
                        }
                      }
                      else if(xcol1.length == 3){
                       
                        for(var i=0 ; i< xcol1.length ; i++){
                            _buckets[xcol1[i]].style.backgroundColor = 'red'
                        }
                      } else if(xcol2.length == 3){
                      
                        for(var i=0 ; i< xcol2.length ; i++){
                            _buckets[xcol2[i]].style.backgroundColor = 'red'
                        }
                      } else if(xcol3.length == 3){
                     
                        for(var i=0 ; i< xcol3.length ; i++){
                            _buckets[xcol3[i]].style.backgroundColor = 'red'
                        }
                      }else if(xdiag1.length == 3){
                        
                        for(var i=0 ; i< xdiag1.length ; i++){
                            _buckets[xdiag1[i]].style.backgroundColor = 'red'
                        }
                      }else if(xdiag2.length == 3){
                        
                        for(var i=0 ; i< xdiag2.length ; i++){
                            _buckets[xdiag2[i]].style.backgroundColor = 'red'
                        }
                      }else{

                      }

                      if(orow1.length == 3){
                         
                            for(var i=0 ; i< orow1.length ; i++){
                                _buckets[orow1[i]].style.backgroundColor = 'red'
                            }
                        }else if(orow2.length == 3){
                         
                          for(var i=0 ; i< orow2.length ; i++){
                              _buckets[orow2[i]].style.backgroundColor = 'red'
                          }
                        }else if(orow3.length == 3){
                         
                          for(var i=0 ; i< orow3.length ; i++){
                              _buckets[orow3[i]].style.backgroundColor = 'red'
                          }
                        }
                        else if(ocol1.length == 3){
                        
                          for(var i=0 ; i< ocol1.length ; i++){
                              _buckets[ocol1[i]].style.backgroundColor = 'red'
                          }
                        } else if(ocol2.length == 3){
                          
                          for(var i=0 ; i< ocol2.length ; i++){
                              _buckets[ocol2[i]].style.backgroundColor = 'red'
                          }
                        } else if(ocol3.length == 3){
                          
                          for(var i=0 ; i< ocol3.length ; i++){
                              _buckets[ocol3[i]].style.backgroundColor = 'red'
                          }
                        }else if(odiag1.length == 3){
                        
                          for(var i=0 ; i< odiag1.length ; i++){
                              _buckets[odiag1[i]].style.backgroundColor = 'red'
                          }
                        }else if(odiag2.length == 3){
                        
                          for(var i=0 ; i< odiag2.length ; i++){
                              _buckets[odiag2[i]].style.backgroundColor = 'red'
                          }
                        }else{
  
                        }
 
                    
                   if(xrow1.length == 3 || xrow2.length == 3 || xrow3.length == 3 || xcol1.length == 3 || xcol2.length == 3 || xcol3.length == 3 || xdiag1.length == 3 || xdiag2.length == 3){
                      _alert.innerHTML = 'X is Win ! Refresh to Play again'
                      haswon = true
                   }

                   if(orow1.length == 3 || orow2.length == 3 || orow3.length == 3 || ocol1.length == 3 || ocol2.length == 3 || ocol3.length == 3 || odiag1.length == 3 || odiag2.length == 3){
                    _alert.innerHTML = 'O is Win ! Refresh to Play again'
                    haswon = true
                     }
                          
 
                      if(fulfill == 9){
                           if(!haswon){
                            _alert.innerHTML = 'Game has Drawn ! Refresh to Play again'
                           } 
                      }
                  }              
    })
   });