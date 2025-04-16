function SourceProvider({ children }: ChildrenProps) {
    const [sources, setSources] = useState<string[]>([]);
  
    // Carregar do localStorage ao montar
    useEffect(() => {
      const data = localStorage.getItem("sources");
      if (data) {
        setSources(JSON.parse(data));
      }
    }, []);
  
    // Salvar no localStorage sempre que sources mudar
    useEffect(() => {
      localStorage.setItem("sources", JSON.stringify(sources));
    }, [sources]);
  
    function add(value: string) {
      setSources((prev) => [...prev, value]);
    }
  
    return (
      <SourceContext.Provider value={{ sources, add }}>
        {children}
      </SourceContext.Provider>
    );
  }
  