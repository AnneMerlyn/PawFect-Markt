export default function Products({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>What Product is This?</h1>
            <p>This is Product {params.id}.</p>
        </div>
    );
}
