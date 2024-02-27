import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function Przedmioty() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[500px]">Przedmioty</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">PROBLEMY SPOŁECZNE I ZAWODOWE INFORMATYK</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">TECHNOLOGIE INTERNETU RZECZY</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">SYSTEMY OPERACYJNE</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">METODY PROBABILISTYCZNE I STATYSTYKA</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">PODSTAWY GRAFIKI KOMPUTEROWEJ</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">TECHNOLOGIE INTERNETOWE</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">WYKORZYSTANIE WZORCÓW W NOWYCH TECHNOLOGIACH </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </main>
    )
}