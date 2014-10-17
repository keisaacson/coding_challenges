class Book
  def initialize(title, authors)
    @title = title
    @authors = authors
  end
end

raw = File.read("library.txt")
step1 = raw.split("\n")
step2 = step1.map { |x| x.split(", by ")  }
step3 = step2.map do |book|
  {
    title: book.first.split(", "),
    authors: book.last.sub(" and ", ", ").split(", ")
  }
end

books = []
step3.each_index do |index|
  title = step3[index][:title]
  authors = step3[index][:authors]
  books << Book.new(title, authors)
end
