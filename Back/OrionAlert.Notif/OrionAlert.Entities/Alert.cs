using static OrionAlert.Entities.Enums;

namespace OrionAlert.Entities
{
    public class Alert
    {
        public Guid Id { get; set; }

        public string Label { get; set; }

        public string Expression { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public Status Status { get; set; }

        public bool IsActive { get; set; }

    }
}
