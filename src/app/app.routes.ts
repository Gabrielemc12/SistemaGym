import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InventarioComponent } from './inventario/inventario.component';
import { ControlEnvioComponent } from './control-envio/control-envio.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CatalogoPesasComponent } from './catalogo-pesas/catalogo-pesas.component';
import { CatalogoMaquinaComponent } from './catalogo-maquina/catalogo-maquina.component';
import { CatalogoProteccionComponent } from './catalogo-proteccion/catalogo-proteccion.component';
import { CatalogoMancuernasComponent } from './catalogo-mancuernas/catalogo-mancuernas.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { SucursalGuatemalaComponent } from './sucursal-guatemala/sucursal-guatemala.component';
import { SucursalHondurasComponent } from './sucursal-honduras/sucursal-honduras.component';
import { SucursalSalvadorComponent } from './sucursal-salvador/sucursal-salvador.component';
import { ControlClienteComponent } from './control-cliente/control-cliente.component';
import { ControlDevolucionComponent } from './control-devolucion/control-devolucion.component';
import { ControlEntregaComponent } from './control-entrega/control-entrega.component';
import { ControlGarantiaComponent } from './control-garantia/control-garantia.component';
import { ControlPagoComponent } from './control-pago/control-pago.component';

export const routes: Routes = [
  { path: '' , component: PaginaPrincipalComponent },
  { path: 'pesas' , component: CatalogoPesasComponent },
  { path: 'maquinas' , component: CatalogoMaquinaComponent },
  { path: 'mancuernas' , component: CatalogoMancuernasComponent },
  { path: 'cliente' , component: ControlClienteComponent },
  { path: 'devolucion' , component: ControlDevolucionComponent },
  { path: 'entrega' , component: ControlEntregaComponent },
  { path: 'envio' , component: ControlEnvioComponent },
  { path: 'garantia' , component: ControlGarantiaComponent },
  { path: 'pago' , component: ControlPagoComponent },
  { path: 'formulario' , component: InicioSesionComponent },
  { path: 'crear' , component: CrearCuentaComponent },
  { path: 'guatemala' , component: SucursalGuatemalaComponent },
  { path: 'honduras' , component: SucursalHondurasComponent },
  { path: 'elsalvador' , component: SucursalSalvadorComponent },
  { path: 'proteccion' , component: CatalogoProteccionComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'controlenvio', component: ControlEnvioComponent },
  { path: 'perfilcliente', component: PerfilClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
