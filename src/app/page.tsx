import prisma from "@/lib/prisma";

export default async function Home() {
    const events = await prisma.event.findMany({
        include: {
            owners: true,
            attendees: true,
        },
    });
    return (
        <ul className="p-4 flex flex-col gap-4">
            {events.map((event) => (
                <li
                    key={event.id}
                    className="p-4 flex flex-col gap-2 border border-white rounded-md w-max"
                >
                    <div className="flex justify-between">
                        <hgroup>
                            <h2 className="text-xl font-bold">{event.title}</h2>
                            <p>{event.description}</p>
                        </hgroup>
                        <figure>
                            <figcaption className="text-sm">Owners</figcaption>
                            <ul className="flex gap-2">
                                {event.owners.map((owner) => (
                                    <li key={owner.id}>{owner.name}</li>
                                ))}
                            </ul>
                        </figure>
                    </div>

                    <figure>
                        <figcaption className="text-sm">Attendees</figcaption>
                        <ul className="flex gap-2">
                            {event.attendees.map((attendee) => (
                                <li
                                    key={attendee.id}
                                    className="bg-red-900 py-1 px-2 rounded-full text-sm"
                                >
                                    {attendee.name}
                                </li>
                            ))}
                        </ul>
                    </figure>
                </li>
            ))}
        </ul>
    );
}
