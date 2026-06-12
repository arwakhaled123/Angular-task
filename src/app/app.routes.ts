import { Routes } from '@angular/router';
import { ProductList } from '../Components/product-list/product-list';
import { LoginComponent } from '../Components/auth/login';
import { SignupComponent } from '../Components/auth/signup';
import { AuthGuard } from './auth.guard';
import { MainLayout } from '../Components/layout/main-layout';
import { ErrorPage } from '../Components/layout/error-page';
import { ProductsAdmin } from '../Components/admin/products-admin';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	// routes rendered inside MainLayout (navbar visible)
	{
		path: '',
		component: MainLayout,
		children: [
			{ path: 'home', component: ProductList, canActivate: [AuthGuard] },
			{ path: 'admin', component: ProductsAdmin, canActivate: [AuthGuard] }
		]
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	// Error route outside layout so navbar won't show
	{ path: 'error', component: ErrorPage },
	{ path: '**', redirectTo: 'error' }
];
