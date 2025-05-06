// Prisma seed script
import minio from "@/lib/minio";
import { PrismaClient } from "../src/generated/prisma";
import { InvitationStatus } from "../src/generated/prisma";
import {
    BucketAlreadyOwnedByYou,
    CreateBucketCommand,
} from "@aws-sdk/client-s3";

const prisma = new PrismaClient();

async function main() {
    // Create users
    await prisma.user.createMany({
        data: [
            {
                name: "Alice Johnson",
                email: "alice.johnson@example.com",
                password: "1234",
            },
            {
                name: "Bob Smith",
                email: "bob.smith@example.com",
                password: "1234",
            },
            {
                name: "Charlie Brown",
                email: "charlie.brown@example.com",
                password: "1234",
            },
            {
                name: "Diana Miller",
                email: "diana.miller@example.com",
                password: "1234",
            },
            {
                name: "Ethan Davis",
                email: "ethan.davis@example.com",
                password: "1234",
            },
            {
                name: "Fiona Wilson",
                email: "fiona.wilson@example.com",
                password: "1234",
            },
            {
                name: "George Clark",
                email: "george.clark@example.com",
                password: "1234",
            },
            {
                name: "Hannah Lewis",
                email: "hannah.lewis@example.com",
                password: "1234",
            },
            {
                name: "Ian Walker",
                email: "ian.walker@example.com",
                password: "1234",
            },
            {
                name: "Julia Hall",
                email: "julia.hall@example.com",
                password: "1234",
            },
        ],
    });

    // Create events
    await prisma.event.createMany({
        data: [
            {
                title: "Event 1",
                description: "Description for Event 1",
                place: "Place 1",
                date: new Date("2025-05-11T09:00:00"),
            },
            {
                title: "Event 2",
                description: "Description for Event 2",
                place: "Place 2",
                date: new Date("2025-05-12T09:00:00"),
            },
            {
                title: "Event 3",
                description: "Description for Event 3",
                place: "Place 3",
                date: new Date("2025-05-13T09:00:00"),
            },
            {
                title: "Event 4",
                description: "Description for Event 4",
                place: "Place 4",
                date: new Date("2025-05-14T09:00:00"),
            },
            {
                title: "Event 5",
                description: "Description for Event 5",
                place: "Place 5",
                date: new Date("2025-05-15T09:00:00"),
            },
        ],
    });

    // Create agenda points
    await prisma.agendaPoint.createMany({
        data: [
            {
                title: "Agenda 1 for Event 1",
                description: "Description for agenda point 1 of Event 1",
                startDate: new Date("2025-05-11T09:00:00"),
                endDate: new Date("2025-05-11T09:45:00"),
                eventId: 1,
            },
            {
                title: "Agenda 2 for Event 1",
                description: "Description for agenda point 2 of Event 1",
                startDate: new Date("2025-05-11T10:00:00"),
                endDate: new Date("2025-05-11T10:45:00"),
                eventId: 1,
            },
            {
                title: "Agenda 3 for Event 1",
                description: "Description for agenda point 3 of Event 1",
                startDate: new Date("2025-05-11T11:00:00"),
                endDate: new Date("2025-05-11T11:45:00"),
                eventId: 1,
            },
            {
                title: "Agenda 4 for Event 1",
                description: "Description for agenda point 4 of Event 1",
                startDate: new Date("2025-05-11T12:00:00"),
                endDate: new Date("2025-05-11T12:45:00"),
                eventId: 1,
            },
            {
                title: "Agenda 5 for Event 1",
                description: "Description for agenda point 5 of Event 1",
                startDate: new Date("2025-05-11T13:00:00"),
                endDate: new Date("2025-05-11T13:45:00"),
                eventId: 1,
            },
            {
                title: "Agenda 6 for Event 1",
                description: "Description for agenda point 6 of Event 1",
                startDate: new Date("2025-05-11T14:00:00"),
                endDate: new Date("2025-05-11T14:45:00"),
                eventId: 1,
            },
            {
                title: "Agenda 1 for Event 2",
                description: "Description for agenda point 1 of Event 2",
                startDate: new Date("2025-05-12T09:00:00"),
                endDate: new Date("2025-05-12T09:45:00"),
                eventId: 2,
            },
            {
                title: "Agenda 2 for Event 2",
                description: "Description for agenda point 2 of Event 2",
                startDate: new Date("2025-05-12T10:00:00"),
                endDate: new Date("2025-05-12T10:45:00"),
                eventId: 2,
            },
            {
                title: "Agenda 3 for Event 2",
                description: "Description for agenda point 3 of Event 2",
                startDate: new Date("2025-05-12T11:00:00"),
                endDate: new Date("2025-05-12T11:45:00"),
                eventId: 2,
            },
            {
                title: "Agenda 4 for Event 2",
                description: "Description for agenda point 4 of Event 2",
                startDate: new Date("2025-05-12T12:00:00"),
                endDate: new Date("2025-05-12T12:45:00"),
                eventId: 2,
            },
            {
                title: "Agenda 5 for Event 2",
                description: "Description for agenda point 5 of Event 2",
                startDate: new Date("2025-05-12T13:00:00"),
                endDate: new Date("2025-05-12T13:45:00"),
                eventId: 2,
            },
            {
                title: "Agenda 6 for Event 2",
                description: "Description for agenda point 6 of Event 2",
                startDate: new Date("2025-05-12T14:00:00"),
                endDate: new Date("2025-05-12T14:45:00"),
                eventId: 2,
            },
            {
                title: "Agenda 1 for Event 3",
                description: "Description for agenda point 1 of Event 3",
                startDate: new Date("2025-05-13T09:00:00"),
                endDate: new Date("2025-05-13T09:45:00"),
                eventId: 3,
            },
            {
                title: "Agenda 2 for Event 3",
                description: "Description for agenda point 2 of Event 3",
                startDate: new Date("2025-05-13T10:00:00"),
                endDate: new Date("2025-05-13T10:45:00"),
                eventId: 3,
            },
            {
                title: "Agenda 3 for Event 3",
                description: "Description for agenda point 3 of Event 3",
                startDate: new Date("2025-05-13T11:00:00"),
                endDate: new Date("2025-05-13T11:45:00"),
                eventId: 3,
            },
            {
                title: "Agenda 4 for Event 3",
                description: "Description for agenda point 4 of Event 3",
                startDate: new Date("2025-05-13T12:00:00"),
                endDate: new Date("2025-05-13T12:45:00"),
                eventId: 3,
            },
            {
                title: "Agenda 5 for Event 3",
                description: "Description for agenda point 5 of Event 3",
                startDate: new Date("2025-05-13T13:00:00"),
                endDate: new Date("2025-05-13T13:45:00"),
                eventId: 3,
            },
            {
                title: "Agenda 6 for Event 3",
                description: "Description for agenda point 6 of Event 3",
                startDate: new Date("2025-05-13T14:00:00"),
                endDate: new Date("2025-05-13T14:45:00"),
                eventId: 3,
            },
            {
                title: "Agenda 1 for Event 4",
                description: "Description for agenda point 1 of Event 4",
                startDate: new Date("2025-05-14T09:00:00"),
                endDate: new Date("2025-05-14T09:45:00"),
                eventId: 4,
            },
            {
                title: "Agenda 2 for Event 4",
                description: "Description for agenda point 2 of Event 4",
                startDate: new Date("2025-05-14T10:00:00"),
                endDate: new Date("2025-05-14T10:45:00"),
                eventId: 4,
            },
            {
                title: "Agenda 3 for Event 4",
                description: "Description for agenda point 3 of Event 4",
                startDate: new Date("2025-05-14T11:00:00"),
                endDate: new Date("2025-05-14T11:45:00"),
                eventId: 4,
            },
            {
                title: "Agenda 4 for Event 4",
                description: "Description for agenda point 4 of Event 4",
                startDate: new Date("2025-05-14T12:00:00"),
                endDate: new Date("2025-05-14T12:45:00"),
                eventId: 4,
            },
            {
                title: "Agenda 5 for Event 4",
                description: "Description for agenda point 5 of Event 4",
                startDate: new Date("2025-05-14T13:00:00"),
                endDate: new Date("2025-05-14T13:45:00"),
                eventId: 4,
            },
            {
                title: "Agenda 6 for Event 4",
                description: "Description for agenda point 6 of Event 4",
                startDate: new Date("2025-05-14T14:00:00"),
                endDate: new Date("2025-05-14T14:45:00"),
                eventId: 4,
            },
            {
                title: "Agenda 1 for Event 5",
                description: "Description for agenda point 1 of Event 5",
                startDate: new Date("2025-05-15T09:00:00"),
                endDate: new Date("2025-05-15T09:45:00"),
                eventId: 5,
            },
            {
                title: "Agenda 2 for Event 5",
                description: "Description for agenda point 2 of Event 5",
                startDate: new Date("2025-05-15T10:00:00"),
                endDate: new Date("2025-05-15T10:45:00"),
                eventId: 5,
            },
            {
                title: "Agenda 3 for Event 5",
                description: "Description for agenda point 3 of Event 5",
                startDate: new Date("2025-05-15T11:00:00"),
                endDate: new Date("2025-05-15T11:45:00"),
                eventId: 5,
            },
            {
                title: "Agenda 4 for Event 5",
                description: "Description for agenda point 4 of Event 5",
                startDate: new Date("2025-05-15T12:00:00"),
                endDate: new Date("2025-05-15T12:45:00"),
                eventId: 5,
            },
            {
                title: "Agenda 5 for Event 5",
                description: "Description for agenda point 5 of Event 5",
                startDate: new Date("2025-05-15T13:00:00"),
                endDate: new Date("2025-05-15T13:45:00"),
                eventId: 5,
            },
            {
                title: "Agenda 6 for Event 5",
                description: "Description for agenda point 6 of Event 5",
                startDate: new Date("2025-05-15T14:00:00"),
                endDate: new Date("2025-05-15T14:45:00"),
                eventId: 5,
            },
        ],
    });

    // Create invitations
    await prisma.invitation.createMany({
        data: [
            {
                senderId: 1,
                receiverId: 2,
                eventId: 1,
                status: InvitationStatus.ACCEPTED,
                createdAt: new Date("2025-04-20T10:00:00"),
            },
            {
                senderId: 2,
                receiverId: 3,
                eventId: 2,
                status: InvitationStatus.PENDING,
                createdAt: new Date("2025-04-21T11:00:00"),
            },
            {
                senderId: 3,
                receiverId: 4,
                eventId: 3,
                status: InvitationStatus.REJECTED,
                createdAt: new Date("2025-04-22T12:00:00"),
            },
            {
                senderId: 4,
                receiverId: 5,
                eventId: 4,
                status: InvitationStatus.ACCEPTED,
                createdAt: new Date("2025-04-23T13:00:00"),
            },
            {
                senderId: 5,
                receiverId: 6,
                eventId: 5,
                status: InvitationStatus.PENDING,
                createdAt: new Date("2025-04-24T14:00:00"),
            },
        ],
    });

    // Connect users to events (owners and attendees)
    await prisma.event.update({
        where: { id: 1 },
        data: {
            owners: { connect: [{ id: 4 }] },
            attendees: {
                connect: [
                    { id: 1 },
                    { id: 4 },
                    { id: 5 },
                    { id: 9 },
                    { id: 10 },
                ],
            },
        },
    });

    await prisma.event.update({
        where: { id: 2 },
        data: {
            owners: { connect: [{ id: 3 }] },
            attendees: {
                connect: [{ id: 3 }, { id: 4 }, { id: 6 }, { id: 7 }],
            },
        },
    });

    await prisma.event.update({
        where: { id: 3 },
        data: {
            owners: { connect: [{ id: 5 }] },
            attendees: {
                connect: [
                    { id: 3 },
                    { id: 4 },
                    { id: 5 },
                    { id: 7 },
                    { id: 8 },
                    { id: 9 },
                    { id: 10 },
                ],
            },
        },
    });

    await prisma.event.update({
        where: { id: 4 },
        data: {
            owners: { connect: [{ id: 4 }] },
            attendees: {
                connect: [
                    { id: 2 },
                    { id: 3 },
                    { id: 4 },
                    { id: 5 },
                    { id: 6 },
                    { id: 7 },
                    { id: 9 },
                    { id: 10 },
                ],
            },
        },
    });

    await prisma.event.update({
        where: { id: 5 },
        data: {
            owners: { connect: [{ id: 9 }] },
            attendees: { connect: [{ id: 9 }, { id: 4 }, { id: 6 }] },
        },
    });

    await createBuckets();
}

async function createBuckets() {
    const events = await prisma.event.findMany();

    for (const event of events) {
        try {
            const bucketName = event.title.replaceAll(" ", "-").toLowerCase();
            await minio.send(new CreateBucketCommand({ Bucket: bucketName }));
        } catch (e) {
            if (e instanceof BucketAlreadyOwnedByYou) {
                // Bucket already exists
                continue;
            } else {
                console.log(e);
            }
        }
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
