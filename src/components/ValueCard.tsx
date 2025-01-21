import { Card, CardContent } from "./Card";

interface ValueCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ValueCard = ({ title, icon, description }: ValueCardProps) => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[200px] text-center">
        <div className="text-4xl mb-4 text-brown-DEFAULT">{icon}</div>
        <h3 className="text-2xl font-serif font-bold text-brown-dark mb-2">{title}</h3>
        <p className="text-sm text-brown-DEFAULT">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ValueCard;