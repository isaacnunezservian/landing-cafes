// ══════════════════════════════════════════════════════════════
//  MENU DATA — categorías e ítems del menú
//  Porta Negras Café — datos de demo
// ══════════════════════════════════════════════════════════════

export interface MenuItem {
  id: string
  name: string
  description?: string
  price: number
  order: number
  isAvailable: boolean
  categoryId: string
}

export interface Category {
  id: string
  name: string
  description?: string
  order: number
  isActive: boolean
  isFeatured?: boolean
  items: MenuItem[]
  image?: string
}

export const MENU_DATA: Category[] = [
  {
    id: "promociones",
    name: "Promociones",
    order: 1,
    isActive: true,
    isFeatured: true,
    items: [
      { id: "p1", name: "Café + 2 Medialunas", price: 8200, order: 1, isAvailable: true, categoryId: "promociones" },
      { id: "p2", name: "Café + Alfacookie", price: 11500, order: 2, isAvailable: true, categoryId: "promociones" },
      { id: "p3", name: "Café + Budín", price: 10300, order: 3, isAvailable: true, categoryId: "promociones" },
      { id: "p4", name: "Café + Chipa", price: 9700, order: 4, isAvailable: true, categoryId: "promociones" },
      { id: "p5", name: "Café + Chipanguich J&Q", price: 13100, order: 5, isAvailable: true, categoryId: "promociones" },
      { id: "p6", name: "Café + Cookie", price: 10600, order: 6, isAvailable: true, categoryId: "promociones" },
      { id: "p7", name: "Café + Croissant simple", price: 8300, order: 7, isAvailable: true, categoryId: "promociones" },
      { id: "p8", name: "Café + Torta", price: 14100, order: 8, isAvailable: true, categoryId: "promociones" },
      { id: "p9", name: "Café + Tostadas", description: "Queso crema y mermelada", price: 12700, order: 9, isAvailable: true, categoryId: "promociones" },
      { id: "p10", name: "Café + Tostado J&Q", price: 12700, order: 10, isAvailable: true, categoryId: "promociones" },
    ],
  },
  {
    id: "alfajores-cuadrados",
    name: "Alfajores & Cuadrados",
    order: 2,
    isActive: true,
    items: [
      { id: "a1", name: "Alfacookie", description: "Dos tapas de cookie de chocolate y nuez, rellenas de dulce de almendras. (VEGANO)", price: 6600, order: 1, isAvailable: true, categoryId: "alfajores-cuadrados" },
      { id: "a2", name: "Alfajor Ganache Choco Blanco, Pistacho, Limón & Frutos Rojos", price: 6600, order: 2, isAvailable: true, categoryId: "alfajores-cuadrados" },
      { id: "a3", name: "Alfajor Vegano de Almendras", description: "Tapas de harina de almendras, con dulce de almendras y granola. (VEGANO)", price: 6600, order: 3, isAvailable: true, categoryId: "alfajores-cuadrados" },
      { id: "a4", name: "Alfajor de Caramelo salado, chocolate & maní", price: 6600, order: 4, isAvailable: true, categoryId: "alfajores-cuadrados" },
      { id: "a5", name: "Alfajor de Choco blanco, DDL, maní & frambuesa", price: 7300, order: 5, isAvailable: true, categoryId: "alfajores-cuadrados" },
      { id: "a6", name: "Alfajor de Choco semi-amargo, pistacho & mousse de chocolate", price: 7300, order: 6, isAvailable: true, categoryId: "alfajores-cuadrados" },
      { id: "a7", name: "Alfajor de Coco & DDL", price: 6600, order: 7, isAvailable: true, categoryId: "alfajores-cuadrados" },
      { id: "a8", name: "Brownie Chocolate & Nuez (Sin TACC)", price: 6600, order: 8, isAvailable: true, categoryId: "alfajores-cuadrados" },
      { id: "a9", name: "Brownie Decorado", price: 6500, order: 9, isAvailable: true, categoryId: "alfajores-cuadrados" },
      { id: "a10", name: "Cuadrado de Coco (Sin TACC)", price: 6600, order: 10, isAvailable: true, categoryId: "alfajores-cuadrados" },
    ],
  },
  {
    id: "budines-tortas",
    name: "Budines & Tortas",
    order: 3,
    isActive: true,
    items: [
      { id: "b1", name: "Budín", description: "Consultar sabores", price: 5300, order: 1, isAvailable: true, categoryId: "budines-tortas" },
      { id: "b2", name: "Torta del Día", price: 9300, order: 2, isAvailable: true, categoryId: "budines-tortas" },
    ],
  },
  {
    id: "cookies",
    name: "Cookies",
    order: 4,
    isActive: true,
    items: [
      { id: "c1", name: "Cookie de Chocolate", price: 4200, order: 1, isAvailable: true, categoryId: "cookies" },
      { id: "c2", name: "Cookie de Avena y Pasas", price: 4200, order: 2, isAvailable: true, categoryId: "cookies" },
      { id: "c3", name: "Cookie de Pistacho y Choco Blanco", price: 4500, order: 3, isAvailable: true, categoryId: "cookies" },
      { id: "c4", name: "Cookie de Mantequilla de Maní", price: 4200, order: 4, isAvailable: true, categoryId: "cookies" },
    ],
  },
  {
    id: "rolls-laminados",
    name: "Rolls & Laminados",
    order: 5,
    isActive: true,
    items: [
      { id: "r1", name: "Croissant simple", price: 4800, order: 1, isAvailable: true, categoryId: "rolls-laminados" },
      { id: "r2", name: "Croissant de jamón y queso", price: 6200, order: 2, isAvailable: true, categoryId: "rolls-laminados" },
      { id: "r3", name: "Medialunas (x2)", price: 3200, order: 3, isAvailable: true, categoryId: "rolls-laminados" },
      { id: "r4", name: "Roll de Canela", price: 5800, order: 4, isAvailable: true, categoryId: "rolls-laminados" },
    ],
  },
  {
    id: "cafe",
    name: "Café",
    order: 6,
    isActive: true,
    items: [
      { id: "cf1", name: "Espresso", price: 2800, order: 1, isAvailable: true, categoryId: "cafe" },
      { id: "cf2", name: "Cortado", price: 3200, order: 2, isAvailable: true, categoryId: "cafe" },
      { id: "cf3", name: "Latte", price: 4200, order: 3, isAvailable: true, categoryId: "cafe" },
      { id: "cf4", name: "Cappuccino", price: 4200, order: 4, isAvailable: true, categoryId: "cafe" },
      { id: "cf5", name: "Flat White", price: 4500, order: 5, isAvailable: true, categoryId: "cafe" },
      { id: "cf6", name: "Latte de especialidad", description: "Consultar sabores de temporada", price: 5200, order: 6, isAvailable: true, categoryId: "cafe" },
    ],
  },
]
