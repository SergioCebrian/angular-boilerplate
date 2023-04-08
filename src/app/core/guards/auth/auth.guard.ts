import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@services/storage/storage.service';

export const authGuard = async () => {

  const router = inject(Router);
  const storageService = inject(StorageService);
  const token = await storageService.getToken();

  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }

};
