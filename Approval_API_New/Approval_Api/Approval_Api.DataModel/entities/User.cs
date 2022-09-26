﻿
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace Approval_Api.DataModel_.entities
{
    public partial class User
    {
        
        //public User()
        //{
        //    Histories = new HashSet<History>();
        //    Requests = new HashSet<Request>();
        //}

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? RoleId { get; set; }
        public DateTime? JoiningDate { get; set; }
        [JsonIgnore]
        public virtual Role Role { get; set; }
        [JsonIgnore]
        public virtual ICollection<History> Histories { get; set; }
        [JsonIgnore]
        public virtual ICollection<Request> Requests { get; set; }
    }
}