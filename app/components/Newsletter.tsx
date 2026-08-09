import Button from "./Button";
import Input from "./Input";

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center max-w-150 gap-12 max-sm:gap-6">
      <h2>Узнайте первым о новинках</h2>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-5 w-full">
          <Input
            type="text"
            placeholder="Ваш e-mail*"
            required
            className="border-[0.5px] text-center py-4"
          />
          <Button type="submit" variant="brown">
            Подписаться
          </Button>
        </div>
        <p className="text-center">
          Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
          персональных данных и ознакомлен(а) с условиями конфиденциальности.
        </p>
      </div>
    </div>
  );
}
