import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = [
  //   new Product(100, 1, "Camera", "In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed leo risus. Nulla eget tellus erat. Duis sollicitudin purus at nunc congue ornare. Mauris eros ex, iaculis et diam sed, ultrices consectetur nulla. Sed mollis nisi odio, a condimentum nulla dignissim id. In bibendum nisl a mauris lacinia, pharetra gravida enim varius. Maecenas efficitur blandit lectus sit amet tincidunt. Curabitur nec bibendum enim. Nulla eu est nulla. In et bibendum urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sed magna sollicitudin, scelerisque quam vitae, ullamcorper justo. Proin aliquet, elit non imperdiet tempus, libero ligula egestas sapien, et rhoncus lorem ligula vel erat. Ut tempor, urna at fermentum porta, ante erat egestas augue, ut ornare orci nisi sit amet enim.", 120, "https://images.pexels.com/photos/1290376/pexels-photo-1290376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
  //   new Product(20, 2, "Mobile", "Phasellus condimentum, nisi ut finibus fringilla, orci risus lacinia leo, eget ullamcorper libero leo sit amet justo. Quisque imperdiet feugiat libero ut finibus. Aenean lectus quam, facilisis et auctor sit amet, lobortis at nibh. In dictum augue in scelerisque posuere. Suspendisse eget lacinia nunc. Cras finibus urna orci, non viverra ipsum vestibulum sit amet. Donec quis felis vitae ante vulputate cursus. Fusce eu turpis auctor tellus gravida aliquam. Sed dui nunc, ullamcorper blandit nisi et, condimentum mattis leo. Etiam viverra dolor at lacus consequat finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin aliquam odio eu ornare tempor. Maecenas a quam non libero consectetur rutrum.", 100, "https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
  //   new Product(0, 3, "Laptop", "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce placerat sapien sed dolor ultricies consequat. Curabitur pretium, ante vitae facilisis sagittis, nunc lorem lobortis sapien, fringilla efficitur lorem orci ut elit. Morbi dictum ut lorem nec mollis. Nam in tempus lectus. Vivamus id metus luctus, congue nisi nec, finibus quam. Phasellus faucibus semper suscipit. Maecenas sollicitudin sem quis risus vehicula mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eros nisl, rutrum non risus ac, viverra semper leo. Donec mi nisi, consectetur quis efficitur vitae, vehicula vel elit. Proin malesuada sem vel ornare vulputate. Fusce blandit, est in pulvinar dignissim, risus dui auctor lacus, vel venenatis nibh ex vel erat. Praesent eget diam sagittis, pharetra erat euismod, tincidunt mauris.", 200, "https://images.pexels.com/photos/7147459/pexels-photo-7147459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
  // ];

  constructor(private client:HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.client.get<Product[]>("http://localhost:52813/api/products");
  }

  getById(id: number):  Observable< Product> {
    return this.client.get<Product>("http://localhost:52813/api/products/getbyid/"+id);
  }

  AddProduct(product: Product):Observable<Product> {
    debugger
    return this.client.post<Product>("http://localhost:52813/api/products/add",product);
  }
  EditProduct(product: Product):Observable<Product> {
    debugger
    return this.client.post<Product>("http://localhost:52813/api/products/PutProduct/"+product.Id,product);
  }
  deleteProduct(id:number):Observable<Product> {
    debugger
    return this.client.delete<Product>("http://localhost:52813/api/products/delete/"+id);
  }
 



}
