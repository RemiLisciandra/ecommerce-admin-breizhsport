import prismadb from "@/lib/prismadb";

// Définissez d'abord un type pour la structure de vos données d'ordre
type OrderItem = {
  product: {
    price: {
      toNumber: () => number;
    };
  };
};

type Order = {
  orderItems: OrderItem[];
};

export const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total: number, order: Order) => {
    const orderTotal = order.orderItems.reduce(
      (orderSum: number, item: OrderItem) => {
        return orderSum + item.product.price.toNumber();
      },
      0
    );
    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
