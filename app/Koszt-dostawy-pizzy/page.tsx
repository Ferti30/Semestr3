"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PizzaPage() {
    const [distance, setDistance] = useState('');
    const [deliveryCost, setDeliveryCost] = useState(null);

    const calculateDeliveryCost = () => {
        const costPerKm = 2.50; // Koszt dostawy za każdy kilometr
        const distanceInKm = parseFloat(distance);

        if (!isNaN(distanceInKm)) {
            const totalCost = distanceInKm * costPerKm;
            setDeliveryCost(totalCost.toFixed(2) + ' zł');
        } else {
            setDeliveryCost(null);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid w-full max-w-sm items-center gap-1.5 items-center">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Kalkulator dostawy pizzy</h4>
                <small className="text-sm font-medium leading-none">Koszt za km: 2,50zł</small>
            <Input
                type="text"
                placeholder="Wpisz liczbę kilometrów"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
            />
            <Button onClick={calculateDeliveryCost}>Oblicz koszt dostawy</Button>
                {deliveryCost && <small className="text-sm font-medium leading-none">Koszt dostawy: {deliveryCost}</small>}
            </div>
            </main>
    );
}
