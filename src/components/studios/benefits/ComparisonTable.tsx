import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface ComparisonRow {
  feature: string;
  traditional: string;
  ai: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Production Time",
    traditional: "Weeks to months",
    ai: "Hours to days"
  },
  {
    feature: "Cost",
    traditional: "High (crew, equipment, location)",
    ai: "Fraction of traditional costs"
  },
  {
    feature: "Scalability",
    traditional: "Limited by resources",
    ai: "Unlimited potential"
  },
  {
    feature: "Iterations",
    traditional: "Time-consuming and costly",
    ai: "Quick and efficient"
  },
  {
    feature: "Customization",
    traditional: "Requires new shoots",
    ai: "Easy adaptation"
  }
];

export const ComparisonTable = () => {
  return (
    <div className="max-w-5xl mx-auto glass-morphism rounded-lg overflow-hidden backdrop-blur-xl bg-black/40 border border-white/10">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-white/10">
            <TableHead className="w-1/3 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl p-3 sm:p-4 md:p-6">Feature</TableHead>
            <TableHead className="w-1/3 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl p-3 sm:p-4 md:p-6">Traditional Production</TableHead>
            <TableHead className="w-1/3 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl p-3 sm:p-4 md:p-6">AI-Powered Production</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map((row, index) => (
            <TableRow key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
              <TableCell className="font-medium text-white text-sm sm:text-base md:text-lg lg:text-xl p-3 sm:p-4 md:p-6">{row.feature}</TableCell>
              <TableCell className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl p-3 sm:p-4 md:p-6">{row.traditional}</TableCell>
              <TableCell className="text-primary text-sm sm:text-base md:text-lg lg:text-xl p-3 sm:p-4 md:p-6 font-medium">{row.ai}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};