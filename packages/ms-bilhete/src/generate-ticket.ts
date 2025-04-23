import { getChannel, EXCHANGES } from './rabbitmq';

export async function generateTicket(ticket: any) {
  const ch = getChannel();
  
  ch.publish(
    EXCHANGES.TICKET, 
    '',
    Buffer.from(JSON.stringify(ticket)),
    { persistent: true }
  );
  
  console.log(`[📤] Published ticket generated event for ticket ID: ${ticket.id}`);
}