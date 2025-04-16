function UserProvider({ children }: ChildrenProps) {
    const [users, setUsers] = useState<User[]>([]);
  
    // Carregar do localStorage ao montar
    useEffect(() => {
      const data = localStorage.getItem("users");
      if (data) {
        setUsers(JSON.parse(data));
      }
    }, []);
  
    // Salvar no localStorage sempre que users mudar
    useEffect(() => {
      localStorage.setItem("users", JSON.stringify(users));
    }, [users]);
  
    function add(user: User) {
      setUsers((prev) => [...prev, user]);
    }
  
    return (
      <UserContext.Provider value={{ users, add }}>
        {children}
      </UserContext.Provider>
    );
  }
  