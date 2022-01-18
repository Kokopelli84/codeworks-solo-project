import { Field, InputType } from 'type-graphql';
import { OrderItemInput } from '../../order-item/types/order-item.input';

@InputType()
export class ShopInput {
  @Field()
  name?: string;

  @Field()
  address?: string;

  @Field()
  city?: string;

  @Field()
  zipCode?: string;

  @Field(() => [OrderItemInput])
  orderItems: OrderItemInput[];
}
