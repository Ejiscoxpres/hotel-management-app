import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { authOptions } from "../../../libs/auth";
import { getRoom } from "../../../libs/api";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16',
  });

  type RequestData = {
    checkinDate: string;
    checkoutDate: string;
    adults: number;
    children: number;
    numberOfDays: number;
    hotelRoomSlug: string;
  };

  export async function POST(req: Request, res: Response) {

    const {
        checkinDate,
        adults,
        checkoutDate,
        children,
        hotelRoomSlug,
        numberOfDays,
      }: RequestData = await req.json();

      if (
        !checkinDate ||
        !checkoutDate ||
        !adults ||
        !hotelRoomSlug ||
        !numberOfDays
      ) {
        return new NextResponse('Please all fields are required', { status: 400 });
      }

      const origin = req.headers.get('origin');

      const session = await getServerSession(authOptions);

      if (!session) {
        return new NextResponse('Authentication required', { status: 400 });
      }

      const userId = session.user.id;
      const formattedCheckoutDate = checkoutDate.split('T')[0];
      const formattedCheckinDate = checkinDate.split('T')[0];

      try {
        const room = await getRoom(hotelRoomSlug);
        const discountPrice = room.price - (room.price / 100) * room.discount;
        const totalPrice = discountPrice * numberOfDays;
      }
    
  }