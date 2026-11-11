import Container from "~/components/Container";

export default function ContactsPage() {
  return (
    <div className="mt-28">
      <Container>
        <div className="flex flex-col gap-4">
          <p>
            Если вам понравилась моя работа, то я буду рада с вами
            повзаимодейстовать
          </p>
          <a href="https://t.me/lalaloppp">
            Мой телеграм для связи @lalaloppp Лина
          </a>
          <a href="tel:89207726969">А также телефон: 89207726969</a>
        </div>
      </Container>
    </div>
  );
}
