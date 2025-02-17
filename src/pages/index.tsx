import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { ProductCard } from "@/components/blocks/ProductCard"
import { CategoryCard } from "@/components/blocks/CategoryCard"

// Sample data (will be replaced with database later)
const featuredProducts = [
  {
    id: "1",
    name: "Modern Sofa",
    price: 999,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Living Room"
  },
  {
    id: "2",
    name: "Dining Table Set",
    price: 799,
    image: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Dining Room"
  },
  {
    id: "3",
    name: "Queen Size Bed",
    price: 1299,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Bedroom"
  },
  {
    id: "4",
    name: "Office Desk",
    price: 399,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Office"
  }
];

const categories = [
  {
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 24
  },
  {
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 18
  },
  {
    name: "Dining Room",
    image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 12
  },
  {
    name: "Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 15
  }
];

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Furniture Store</h1>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <motion.section 
          className="relative h-[70vh] rounded-3xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Modern furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <Badge variant="secondary" className="mb-4">
              New Collection 2024
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Modern Furniture
              <br />
              For Modern Living
            </h1>
            <p className="mx-auto max-w-[700px] mt-4 text-lg text-gray-200">
              Discover our curated collection of contemporary furniture
            </p>
            <Button size="lg" className="mt-8">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.section>

        {/* Categories */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-muted rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">Get updates about new products and special offers</p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border bg-background px-4"
            />
            <Button>Subscribe</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-muted-foreground">Quality furniture for your home and office.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Contact Us</li>
                <li>Shipping Policy</li>
                <li>Returns & Exchanges</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Living Room</li>
                <li>Bedroom</li>
                <li>Dining Room</li>
                <li>Office</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Pinterest</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 Furniture Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}