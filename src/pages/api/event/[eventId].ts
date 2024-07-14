import type { APIRoute } from "astro";

const res = (
    body: string,
    {
        status, statusText, headers
    }: {
        status?: number,
        statusText?: string,
        headers?: Headers
    }
) => new Response(body, {
    status,
    statusText,
    headers
});

export const POST: APIRoute = async ({ params, request }) => {
    const { eventId } = params;
    const { body } = request;
    console.log(eventId, body);
    return res('POST', { status: 200 });
}