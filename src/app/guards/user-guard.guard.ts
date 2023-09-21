import { CanActivateFn } from '@angular/router';

export const userGuardGuard: CanActivateFn = (route, state) => {
  let user = JSON.parse(localStorage.getItem("todouser")!)
  if(!user){
    alert("you are not logged in")
    return false;
  }else{
    return true;
  }

};
