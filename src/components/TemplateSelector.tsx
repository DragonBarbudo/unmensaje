import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface TemplateSelectorProps {
  template: string;
  setTemplate: (template: string) => void;
}

export const TemplateSelector = ({ template, setTemplate }: TemplateSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label>Select Template</Label>
      <RadioGroup
        value={template}
        onValueChange={setTemplate}
        className="grid grid-cols-3 gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="minimal" id="minimal" />
          <Label htmlFor="minimal">Minimal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="gradient" id="gradient" />
          <Label htmlFor="gradient">Gradient</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="magazine" id="magazine" />
          <Label htmlFor="magazine">Magazine</Label>
        </div>
      </RadioGroup>
    </div>
  );
};